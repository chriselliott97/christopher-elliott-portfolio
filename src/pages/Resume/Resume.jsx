import File from '../../assets/file.svg'
import styles from './Resume.module.css'
const Resume = () => {
  const onButtonClick = () => {
    fetch('Resume-ChristopherElliott.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Resume-ChristopherElliott.pdf';
            alink.click();
        })
    })
  }

  return ( 
    <main className={styles.resumeMain}>
      <section className={styles.title}>
        Resume
      </section>
      <div>
        <img className={styles.pdfIcon} onClick={onButtonClick} src={File} alt='button link'/>
      </div>
      <div className={styles.lowerText}>  
        Click the file to download my resume!
      </div>
    </main>
  );
}

export default Resume;