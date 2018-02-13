import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListRow from './listRow/listRow';
import ListColumn from './listColumn/listColumn';

import './Contact.css';

class ContactList extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    lists: PropTypes.arrayOf(Object)
  };

  render() {
    return(
      <section className="contact-container">
        <div className="contact-list-wrapper">
          {
            this.props.lists.map((list, index) => {
              return (
                <div key={ index }>
                  <ListRow rowData={list}>
                    {
                      (rowData) => {
                        return (
                          <div style={{
                            display: 'inherit',
                            alignItems: 'inherit'
                          }}>
                            <ListColumn cell={rowData.thumbnail}>
                             {
                               (cellData) => {
                                 return (
                                    <img src={cellData}/>
                                 )
                               }
                             }
                            </ListColumn>
                            <ListColumn cell={rowData.personalDetails}>
                              {
                                (cellData) => {
                                  return (
                                    <div>
                                      <aside style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                      }}>
                                        <p style={{
                                          fontSize: '1.5rem',
                                          fontWeight: 'bold',
                                          color: '#4a4a4a',
                                          textTransform: 'capitalize',
                                          alignSelf: 'baseline'

                                        }}>
                                          {cellData.name && cellData.name}
                                        </p>
                                        <p
                                        style={{
                                          fontSize: '.9rem',
                                          fontWeight: 'bold',
                                          color: 'gray'
                                        }}>
                                          {cellData.phone && cellData.phone}
                                        </p>
                                      </aside>
                                      <aside style={{
                                        color: 'gray',
                                        fontWeight: 'bold',
                                        fontStyle: 'italic',
                                        fontSize: '0.8rem'
                                      }}>
                                        <p>{cellData.email && cellData.email}</p>
                                      </aside>
                                    </div>
                                  )
                                }
                              }
                            </ListColumn>
                          </div>
                        )
                      }
                    }
                  </ListRow>
                </div>
              )
            })
          }
        </div>
      </section>
    )
  }
};

export default ContactList;
