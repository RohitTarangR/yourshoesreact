import React from 'react'

const Team = ({TeamMem}) => {
  return (
    <>
      <div className="column float-left w-1/3 max-lg:w-1/2 max-md:w-full mb-4 pt-0 px-2 ">
        <div className="card m-5 border border-zinc-300 hover:shadow-xl hover:shadow-zinc-300">
          <img
            className="h-72 object-cover hover:brightness-75 transition-all duration-300"
            src={TeamMem.imgUrl}
            alt={TeamMem.Tname}
            style={{ width: "100%" }}
          />
          <div className="container p-4 w-[100%]">
            <h2 className="font-bold">Name : - {TeamMem.Tname}</h2>
            <p className="title">Role : - {TeamMem.title}</p>
            <p>{TeamMem.about}</p>
            <a className="underline italic" href={`mailto:${TeamMem.email}`}>
              Email : - {TeamMem.email}
            </a>
            <p>
              <button className="font-semibold w-[100%] h-10 bg-black text-white hover:bg-gray-500 hover:text-white transition-all my-4 duration-300">
                Contact
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team