
// Props - title, description

// We can use Fragments in 2 ways - <Fragment></Fragment> ( unnamed import from react library ), <></>
const MyComponent = ({ title, description }) => (
  <div>
    <h3>{ title }</h3>
    <p>{ description }</p>
  </div>
);

export default MyComponent;