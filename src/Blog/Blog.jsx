const Blog = () => {
    return (
        <div className="container shadow-lg border">
        <h4 className=" p-2">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h4>
        <p className="m-3 p-2">
        Access tokens carry the necessary information to access a resource directly. In other words, when a client passes an access token to a server managing a resource, that server can use the information contained in the token to decide whether the client is authorized or not. Access tokens usually have an expiration date and are short-lived.

        Refresh token carries the information necessary to get a new access token. In other words, whenever an access token is required to access a specific resource, a client may use a refresh token to get a new access token issued by the authentication server.
        </p>
        <h4 className="m-3 p-2">Compare SQL and NoSQL databases?</h4>
        <p className="m-3 p-2">
        SQL databases use a structured data model based on tables with predefined schemas. The data is organized into rows and columns, and relationships between tables are established using primary and foreign keys.
        NoSQL databases use a variety of data models, including key-value, document, columnar, and graph models. These databases offer more flexibility in handling unstructured and semi-structured data.
        </p>
        <h4 className="m-3 p-2">What is express js? What is Nest JS </h4>
        <p className="m-3 p-2">
        Express.js is a lightweight and flexible web application framework for Node.js. It simplifies the process of building web applications and APIs by providing an intuitive routing system, middleware support for handling requests and responses, and compatibility with various template engines. Express.js is ideal for developers who prefer a minimalistic and unopinionated approach to web development.

         Nest.js, on the other hand, is a robust and opinionated framework for creating server-side applications with TypeScript. It combines elements from Express.js and Angular to offer a scalable and modular architecture. With features like dependency injection, decorators, and metadata, Nest.js promotes maintainable and structured code. It also provides built-in support for WebSockets, microservices, and GraphQL, making it a comprehensive choice for building modern server-side applications.
        </p>
        <h4 className="m-3 p-2">What is MongoDB aggregate and how does it work</h4>
        <p className=" p-3">
        The MongoDB aggregate function is a powerful feature that allows you to perform advanced data aggregation operations on collections. It works by applying a series of stages to the documents in a collection, transforming and processing the data along the way.

        With aggregate, you can perform operations such as filtering, grouping, sorting, projecting (including or excluding fields), and computing aggregate values. Each stage in the aggregation pipeline modifies the data in a specific way, and the output of one stage serves as the input for the next stage.

        The aggregate operation is flexible and can be customized based on your specific requirements. It provides a powerful toolset of operators that enable you to shape and analyze your data effectively. By leveraging the aggregate function, you can extract valuable insights from your MongoDB collections and perform complex data manipulations with ease.
        </p>
        </div>
    );
};

export default Blog;