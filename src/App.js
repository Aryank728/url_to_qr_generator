import './App.css';

function generateqr(){
  let imgBox = document.getElementById('imgBox');
  let qrImage = document.getElementById('qrImage');
  let qrText = document.getElementById('qrText');
  if(qrText.value.length > 0){
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
    imgBox.classList.add('show-img');
    // imgBox.style.display = 'block';
  }else{
    qrText.classList.add('error');
    setTimeout(()=>{
      qrText.classList.remove('error');
    }, 1000);
    }
  }


function App() {
  return (
    <div className="App">
      <p>Provide the URL</p>
      <input type='text' placeholder='Enter URL' id='qrText'/>
      <div id='imgBox'>
        <img src='' id='qrImage' alt='QR Code'/>
      </div>
      <button onClick={generateqr}>Generate QR Code</button>
    </div>
  );
}

export default App;
