

const Resume = () => {
  const onButtonClick = () => {
    fetch('Resume.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Resume.pdf';
            alink.click();
        })
    })
  }

  return ( 
    <main>
      <h1>Resume</h1>
      <div>
          <button onClick={onButtonClick} alt='button link'>Resume</button>
        <h4>Click the button to download my resume</h4>
      </div>
    </main>
  );
}

export default Resume;