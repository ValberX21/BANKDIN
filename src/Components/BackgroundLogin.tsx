const BackgroundLogin = () => {
    return (
      <div className="fixed inset-0 z-0 overflow-hidden bg-[#151010]">
        {/* Circle 1 */}
        <div className="absolute w-[250px] h-[250px] bg-[#ffff] rounded-full top-[1%] left-[120%] translate-x-[-50%] translate-y-[-50%] blur-[130px]"></div>
  
        {/* Circle 2 */}
        <div className="absolute w-[220px] h-[340px] bg-green-300 rounded-full top-[119%] left-[90%] translate-x-[-50%] translate-y-[-50%] blur-[90px]"></div>
      </div>
    );
  };
  
  export default BackgroundLogin;