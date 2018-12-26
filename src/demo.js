import React, { Component } from 'react';

import { render, Window, App, Box, Button, Separator, TextInput } from 'proton-native';

class Demo extends Component {
  render() {
    return (
      <App>
        <Window title="Demo" width={300} height={300}>
          <Box>
            <Button stretchy={true} onClick={() => console.log('Hello')}>
              Button
          </Button>
            <Separator />
            <TextInput> Hello </TextInput>
          </Box>
        </Window>
      </App>
    );
  }
}

render(<Demo />);
