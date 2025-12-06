
  import {Header} from "./Components/Header";
  import Body from "./Components/Body";


  const AppLayout=()=>{
    console.log(<Body/>);
    return(
      <div className="app">
        <Header/>
        <Body/>
      </div>
    );
  };

  export default AppLayout;


