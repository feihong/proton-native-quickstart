sleep 0.5
osascript -e 'tell application "System Events" to tell process "node"' \
  -e 'set frontmost to true' \
  -e 'end tell'