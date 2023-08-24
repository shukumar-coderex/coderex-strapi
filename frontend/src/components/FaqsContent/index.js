import React, { Component, Fragment } from 'react';
import styles from './style';
import parse from 'html-react-parser';
import Collapse from '@kunukn/react-collapse';

class FaqsContent extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      index: 1,
    };

    this.onToggle = this.onToggle.bind( this );
  }

  onToggle( index ) {
    this.setState( {
      index: this.state.index === index ? null : index,
    } );
  }

  render() {
    const { content } = this.props;
    return (
      <Fragment>
        <section className="faqs-policy-content pos-relative">
          <div className="cr-container">
            <div className="cr-row">
              <div className="cr-col">
                <div className="faqs-content-wrapper">
                  {content.map( ( item, key ) => {
                    return (
                      <div
                        className={`item ${
                          this.state.index === key + 1 ? 'item--active' : ''
                        } `}
                        key={key}
                      >
                        <button
                          className="btn"
                          onClick={() => {
                            this.onToggle( key + 1 );
                          }}
                        >
                          <span>{parse( item.title )}</span>
                          <svg className={''} viewBox="6 0 12 24">
                            <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
                          </svg>
                        </button>
                        <Collapse
                          className="collapse"
                          isOpen={this.state.index === key + 1}
                          onChange={( { state } ) => {
                            this.setState( { item1: state } );
                          }}
                          onInit={( { state } ) => {
                            this.setState( { item1: state } );
                          }}
                        >
                          <div className="content-body">
                            {parse( item.description )}
                          </div>
                        </Collapse>
                      </div>
                    );
                  } )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{styles}</style>

        <style jsx global>{`
          .faqs-content-wrapper .btn {
            width: 100%;
            border: none;
            display: block;
            text-align: left;
            font-size: 24px;
            background: transparent;
            padding: 15px 20px;
            border-radius: 5px 5px 0 0;
            position: relative;
            transition: all 0.3s ease;
          }
          .faqs-content-wrapper .btn svg {
            width: 12px;
            height: 12px;
            position: absolute;
            top: 20px;
            right: 20px;
            transform: rotate(90deg);
            transition: all 0.3s ease;
          }

          .faqs-content-wrapper .item {
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          .faqs-content-wrapper .item--active .btn {
            background-color: #f7f7f7;
            border-bottom: 1px solid #ccc;
          }
          .faqs-content-wrapper .item--active .btn svg {
            transform: rotate(-90deg);
          }

          .faqs-content-wrapper .collapse {
            transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);
          }
          .faqs-content-wrapper .content-body {
            padding: 15px 20px;
          }
          .faqs-content-wrapper .content-body ul,
          .faqs-content-wrapper .content-body ol {
            margin-left: 18px;
          }
          .faqs-content-wrapper .content-body ul {
            list-style: disc;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default FaqsContent;
