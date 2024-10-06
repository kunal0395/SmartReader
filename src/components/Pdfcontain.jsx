import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import Chatbot from './Chatbot'; 

function Pdfcontain({ setPdfFile }) {
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = () => {
        setPdfFile(reader.result);
        navigate('/pdf-viewer');
      };
    } else {
      console.log('Please select a PDF file.');
    }
  };

  return (
    <>
    <Chatbot />
      <div className="bg-[#42424a] w-full h-[1500px]">
        <div className="bg-[#2d2d36] w-full h-[550px] flex rounded-b-[50px] flex-row">
          <div className="pdf-container w-[360px] h-72 rounded-2xl bg-zinc-700 cursor-pointer ml-[130px] mt-[90px] flex justify-center items-center">
            <div className="w-80 h-64 flex-col flex justify-center items-center border-dashed border-white border-2 rounded-2xl cursor-pointer">
              <label
                htmlFor="fileInput"
                className="cursor-pointer flex-col flex gap-6 justify-center items-center"
              >
                <img
                  src="icon.png"
                  alt="PDF Icon"
                  id="img1"
                  className="w-32 h-32 cursor-pointer justify-center"
                />
                <span className="text-white text-2xl cursor-pointer">
                  Click to Select PDF file
                </span>
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>
          <div className="flex ml-[190px] mt-[130px] w-[500px] h-72 flex-col gap-3">
            <span className="flex text-white text-3xl font-bold">Open files directly from your device to anywhere</span>
            <span className="flex text-white text-xl">Open files of any size directly from your device without ever storing anything online.</span>
            <div className='flex'>
              <div>
            <span className="flex text-white text-xl"># Summarization</span>
            <span className="flex text-white text-xl"># Translation</span>
              </div>
              <div className='ml-10'>
            <span className="flex text-white text-xl"># Web Search</span>
            <span className="flex text-white text-xl"># Text-to-Speech</span>
              </div>
            </div>
          </div>
        <div className='mt-[480px] absolute ml-[660px] flex justify-center items-center'>
          <img src="arrow.png" alt="" className='rounded-full w-16 animate-bounce'/>
        </div>
        </div>


<div className="w-full text-white flex-col mt-16">

<div className="max-w-[44rem] mx-auto p-6 font-xl text-lg flex items-center">
        <img src="cloud.png" alt="" className="mr-4 w-24 mb-8 bg-orange-400 rounded-full" />
        <div>
            <h2 className="text-3xl font-bold">Files are shared straight from your device</h2>
            <p className="mb-8">When you close the browser tab your files are no longer accessible, minimising the risk of anyone getting unwanted access. SmartReader uses the peer-to-peer technology WebRTC to find the shortest path, meaning sometimes your data doesn't even have to leave the building!</p>
        </div>
    </div>

    <div className="max-w-[44rem] mx-auto p-6 font-xl text-lg flex items-center">
        <div>
            <h2 className="text-3xl font-bold">Only the you can see your files</h2>
            <p className="mb-8">Only you can access your files. Your data is encrypted end-to-end, and can only be read by you</p>
        </div>
        <img src="lock.webp" alt="Logo" className="ml-4 w-24 mb-12" />
    </div>

    <div className="max-w-[44rem] mx-auto p-6 font-xl text-lg flex items-center">
        <img src="tree.png" alt="Logo" className="mr-4 w-24 mb-8 rounded-full" />
        <div>
            <h2 className="text-3xl font-bold">Low environmental impact</h2>
            <p className="mb-8">Because we don't store data we don't need bulky servers, and that saves a lot of energy. By using SmartReader you'll have a much smaller carbon footprint than when using a cloud storage provider.</p>
        </div>
    </div>

    <div className="max-w-[44rem] mx-auto p-6 font-xl text-lg flex items-center">
        <div>
            <h2 className="text-3xl font-bold">Do you still have questions?</h2>
            <p className="mb-8">You can also <Link to="/contact" className="underline decoration-orange-500 decoration-2 cursor-pointer">send us a message.</Link>  for any questions you might have about SmartReader or privacy.</p>
        </div>
        <img src="message.png" alt="Logo" className="ml-4 w-24 mb-12 rounded-full" />
    </div>
</div>
    </div>
    </>
  );
}

export default Pdfcontain;
