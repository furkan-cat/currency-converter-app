* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  font-size: 22px;
}

#main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 300px;
  height: 70vh;
  background-size: cover;
  border-radius: 15px;
  box-shadow: 2px 8px 6px -7px rgb(0, 0, 0);
  background-color: #0a146e;
}

.container {
  width: 90%;
  margin: 0 auto;
}

#name {
  width: 100%;
  height: 37px;
  border: none;
  margin-bottom: 15px;
  border-radius: 5px;
}

#name::placeholder {
  text-align: center;
}

form {
  background-color: #ffffff;
  border-radius: 5px;
  overflow: hidden;
}

img {
  width: 30px;
}

.col {
  display: flex;
  align-items: center;
  position: relative;
}

.col::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgb(210, 210, 217);
}

.col > * {
  padding: 4px;
}
