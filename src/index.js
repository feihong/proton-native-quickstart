import React, { Component } from 'react'
import { render, Window, App, Menu, Box, Button, Separator, TextInput }
  from 'proton-native'

class Demo extends Component {
  render() {
    return (
      <App onShouldQuit={() => console.log('quitting')}>
        <Menu>
          <Menu.Item type='Quit' />
        </Menu>
        <Window title="Demo" size={{ w: 300, h: 300 }} menuBar={false}>
          <Box>
            <Button stretchy={true} onClick={() => console.log('Hello')}>
              Button
          </Button>
            <Separator />
            <TextInput> 你好世界！ </TextInput>
          </Box>
        </Window>
      </App>
    );
  }
}

render(<Demo />);
