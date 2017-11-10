
const _ = require('lodash');
const Products = require('./data/product');
const ProductList = require('./data/productList')

/* Here a simple schema is constructed without using the GraphQL query language.
  e.g. using 'new GraphQLObjectType' to create an object type
*/

let {
  // These are the basic GraphQL types need in this tutorial
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  // This is used to create required fileds and arguments
  GraphQLNonNull,
  // This is the class we need to create the schema
  GraphQLSchema,
} = require('graphql');

const ProductType = new GraphQLObjectType({
  name: "Product",
  description: "Product",
  fields: () => ({
    Id: {type: new GraphQLNonNull(GraphQLString)},
    Name: {type: new GraphQLNonNull(GraphQLString)},
    Price: {type: new GraphQLNonNull(GraphQLString)},
    Brand: {type: new GraphQLNonNull(GraphQLString)},
    MainImageUrl: {type: new GraphQLNonNull(GraphQLString)}
  })
});

const ProductListType = new GraphQLObjectType({
  name: "ProductList",
  description: "List of Products",
  fields: () => ({
    products: {
      type: new GraphQLList(ProductType),
      description: "List of all Products"
    }
  })
});

// This is the Root Query
const BlogQueryRootType = new GraphQLObjectType({
  name: 'BlogAppSchema',
  description: "Blog Application Schema Query Root",
  fields: () => ({
    productList: {
      type: ProductListType,
      description: "List of all Products",
      resolve: function() {
        return ProductList
      }
    }
  })
});

// This is the schema declaration
const BlogAppSchema = new GraphQLSchema({
  query: BlogQueryRootType
  // If you need to create or updata a datasource,
  // you use mutations. Note:
  // mutations will not be explored in this post.
  // mutation: BlogMutationRootType
});


module.exports = BlogAppSchema;
