
import Button from "./components/Button.tsx";
import { Card } from "./components/Card.tsx";
import Container from "./components/Container.tsx";
import Form from "./components/Form.tsx";
import Input from "./components/Input.tsx";


function App (){
  function handleSave(data:unknown){
    const extractData=data as {name: string; age: string};
    console.log(extractData);

  }
  return(
      <main >
        <Form onSave={handleSave}>
          <Input  type="text" label="Name" id="name" name=""/>
          <Input  type="number" label="Age" id="age"/>
          <Button>Save</Button>
        </Form>
        <p>
        
          <Card>Example</Card>
          <Container as={Button}>Click me</Container>
          <Button >A Button</Button>
        </p>
        <p>
          <Button href='https://google.com'>A LInk</Button>
        </p>
      </main>
  ) ;
  
}
export default App;
