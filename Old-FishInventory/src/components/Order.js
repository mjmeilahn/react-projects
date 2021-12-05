import React from 'react';
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default class Order extends React.Component {
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';

      if (isAvailable) {
          return prevTotal + (count * fish.price);
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <TransitionGroup component="ul" className="order">
          {orderIds.map(key => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';
            
            // do not render anything if fish object does not exist
            if (!fish) return null;

            if (!isAvailable) {
              return <li key={key}>Sorry {fish ? fish.name : 'fish' } is no longer available</li>;
            }

            return (
              <CSSTransition classNames="order" key={key} timeout={{ enter: 250, exit: 250 }}>
                <li key={key}>
                  <TransitionGroup component="span" className="count">
                    <CSSTransition classNames="count" key={count} timeout={{ enter: 250, exit: 250 }}>
                      <span>{count} lbs.</span>
                    </CSSTransition>
                  </TransitionGroup>
                  {fish.name} {formatPrice(count * fish.price)}
                  <span onClick={() => this.props.deleteFromOrder(key)}>&times;</span>
                </li>
              </CSSTransition>
            );
          })}
        </TransitionGroup>

        <div className="total">
          Total: <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    )
  }
}