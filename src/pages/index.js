import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Index = () => {
      return (
            <StaticQuery
                  query={graphql`{
                        allMongodb<DATABASE><COLLECTION> {
                              edges {
                                    node{
                                          id
                                          firstname
                                          lastname
                                    }
                              }
                        }
                  }`} // use http://localhost:8000/___graphql to  set up queries
                  render={({ allMongodbDatabasenameCollectionname }) => (
                        <>
                              {
                                    allMongodbDatabasenameCollectionname.edges.map(({ node }) => (
                                          <ul key={node.id}>
                                                <li><strong>First name:</strong> {node.firstname}</li>
                                                <li><strong>Last name:</strong> {node.lastname}</li>
                                                <li><strong>ID:</strong> {node.id}</li>
                                          </ul>
                                    ))
                              }
                        </>
                  )}
            />
      )
}

export default Index;