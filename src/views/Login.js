import { Form, Grid, Header, Segment } from "semantic-ui-react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ setUser }) {
  const [name, setName] = useState("Mathew");
  const [password, setPassword] = useState("admin");
  let history = useHistory();

  //   handleChange = (e, { name, value }) => setName(value));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setUser(Math.ceil(Math.random() * 10000), name);
      history.goBack();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    // <div>
    <Grid centered relaxed>
      <Grid.Column
        style={{ marginTop: "10vh", maxWidth: "20vw", marginLeft: "-12.5%" }}
      >
        <Header centered>Login</Header>
        <Segment>
          <Form onSubmit={handleSubmit}>
            {/* <Form.Group> */}
            <Form.Input
              placeholder="Name"
              label="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Input
              placeholder="Password"
              label="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Button content="Log-in" fluid primary />
            {/* </Form.Group> */}
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
    // </div>
  );
}

export default Login;