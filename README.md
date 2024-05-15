<div align="center">
        <h1>
       react-transverse-wave-loading
        </h1>
</div>

### Features

- It generates transverse wave loading effect

-      /\ /\                  /\ /\ 
-   /\      /\             /\      /\
- /\          /\         /\          /\
-              /\     /\             /\     /\
-                /\ /\                 /\ /\


### Install

    npm install react-transverse-wave-loading

### Quickstart

- NOTE: I working on to attach css file into, tried many ways still not expected result.

- First add these css classes in root or src folders' index.css file
- I had dependencies Tailwindcss but it is not required for this package, you can install without tailwindcss.

```css
.dots {
  margin-top: 200px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
}

.dots .dot {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  align-content: center;
  text-align: center;
  font-size: large;
  background-color: green;
  color: #fff;
  font-weight: 600;
  box-shadow: 1px 10px 20px #808080b8;
  animation: wave 1s infinite alternate;
}

@keyframes wave {
  0% {
    transform: translateY(40px);
  }

  to {
    transform: translateY(-40px);
  }
}

.dots .dot:nth-child(1) {
  animation-delay: 80ms;
}

.dots .dot:nth-child(2) {
  animation-delay: 0.16s;
}

.dots .dot:nth-child(3) {
  animation-delay: 0.24s;
}

.dots .dot:nth-child(4) {
  animation-delay: 0.32s;
}

.dots .dot:nth-child(5) {
  animation-delay: 0.4s;
}

.dots .dot:nth-child(6) {
  animation-delay: 0.48s;
}

.dots .dot:nth-child(7) {
  animation-delay: 0.56s;
}

.dots .dot:nth-child(8) {
  animation-delay: 0.64s;
}

.dots .dot:nth-child(9) {
  animation-delay: 0.72s;
}

.dots .dot:nth-child(10) {
  animation-delay: 0.8s;
}

@media (max-width: 480px) {
  .dots {
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
  }

  .dots .dot {
    height: 15px;
    width: 20px;
    border-radius: 50%;
    align-content: center;
    text-align: center;
    font-size: 12px;
    background-color: green;
    color: #fff;
    font-weight: 600;
    box-shadow: 1px 10px 20px #808080b8;
    animation: wave_mobile 1s infinite alternate;
  }

  @keyframes wave_mobile {
    0% {
      transform: translateY(-20px);
    }

    to {
      transform: translateY(20px);
    }
  }

  .dots .dot:nth-child(1) {
    animation-delay: 0.1s;
  }

  .dots .dot:nth-child(2) {
    animation-delay: 0.2s;
  }

  .dots .dot:nth-child(3) {
    animation-delay: 0.3s;
  }

  .dots .dot:nth-child(4) {
    animation-delay: 0.4s;
  }

  .dots .dot:nth-child(5) {
    animation-delay: 0.5s;
  }

  .dots .dot:nth-child(6) {
    animation-delay: 0.6s;
  }

  .dots .dot:nth-child(7) {
    animation-delay: 0.7s;
  }

  .dots .dot:nth-child(8) {
    animation-delay: 0.8s;
  }

  .dots .dot:nth-child(9) {
    animation-delay: 0.9s;
  }

  .dots .dot:nth-child(10) {
    animation-delay: 1s;
  }
}
```

-
-
- Use case

```jsx
import { TransverseWaveLoading } from "react-transverse-wave-loading";

function App() {
  return (
    <div className="App">
      <TransverseWaveLoading />
    </div>
  );
}

export default App;
```

### User

Thank you for using....
