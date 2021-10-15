@import 'styles/switch/switch.css';
@import 'styles/result/result.css';
@import 'styles/connection/connection.css';
@import 'styles/input/input.css';

* {
  user-select: none;
}

html, body, div.container {
  margin: 0;
  padding: 0;
  height: 100%;
}

div.container {
  display: grid;
  grid-template-rows: 100fr 5fr 100fr;
  grid-template-columns: auto;
  grid-template-areas:
            "result"
            "connection"
            "input";
  grid-gap: 20px;
  background: midnightblue;
}

#result {
  grid-area: result;
}

#connection {
  grid-area: connection;
}

#input {
  grid-area: input;
}
