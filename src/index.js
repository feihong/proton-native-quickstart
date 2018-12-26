import React, { Component } from 'react'
import { render, Window, App, Menu, Box, Button, Separator, Text, TextInput }
  from 'proton-native'

class Demo extends Component {
  render() {
    return (
      <App onShouldQuit={() => console.log('quitting')}>
        <Menu>
          <Menu.Item type='Quit' />
        </Menu>
        <Window title="Demo" size={{ w: 300, h: 300 }} menuBar={false} margined>
          <Box>
            <Box vertical={false} stretchy={false}>
              <Button stretchy={false} onClick={() => console.log('Hello')}>
                Button
            </Button>
              <Text stretch={false}> This is a text </Text>
            </Box>
            <Separator />
            <TextInput> 你好世界！ </TextInput>
          </Box>
        </Window>
      </App>
    );
  }
}

render(<Demo />);
