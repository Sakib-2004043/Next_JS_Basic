"use client";
const PostButton = ({ data }) => {
  return (
    <>
      <button 
        onClick={() => alert("Description : " + data)}
        style={{
          backgroundColor: "green",  
          color: "white",        
          padding: "10px 20px",      
          border: "none",           
          borderRadius: "5px",      
          cursor: "pointer"      
        }}
      >
        Description
      </button>
    </>
  );
};

export default PostButton;
