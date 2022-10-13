import { useRef, useState, useEffect, useContext } from 'react';
import axios from 'axios'

const SubmitArticle = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [errMsg, setErrMsg] = useState('');
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [journalName, setJournalName] = useState('')
    const [yearOfPublication, setYearOfPublication] = useState('')
    const [volumeNumber, setVolumeNumber] = useState('')
    const [pages, setPages] = useState('')
    const [doi, setDoi] = useState('')


    const client = axios.create({
        baseURL: "https://speed-stream53-group1.herokuapp.com/articles"
    })

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [title, author, journalName, yearOfPublication, volumeNumber, pages, doi])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            client
            .post('', {
                title: title,
                author: author,
                journalName: journalName,
                yearOfPublication: yearOfPublication,
                volumeNumber: volumeNumber,
                pages: pages,
                doi: doi
            })
        }catch (err){
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Something went wrong');
            }
            errRef.current.focus();
        }
    }

    const content = (
        <section className="submitarticle">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Submit an Article</h1>
            <p>If you would like to submit an article please fill out this form</p>
            <form className="form1" noValidate onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    type='text'
                    placeholder='Title of the article'
                    name='title'
                    ref={userRef}
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor="author">Author</label>
                <input
                    type='text'
                    placeholder='Author of the article'
                    name='author'
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author}
                />
                <label htmlFor="journalName">Journal name</label>
                <input
                    type='text'
                    placeholder='Journal name for the article'
                    name='journalName'
                    onChange={(e) => setJournalName(e.target.value)}
                    value={journalName}
                />
                <label htmlFor="yearOfPublication">Year of publication</label>
                <input
                    type='text'
                    placeholder='Year of publication of the article'
                    name='yearOfPublication'
                    onChange={(e) => setYearOfPublication(e.target.value)}
                    value={yearOfPublication}
                />
                <label htmlFor="volumeNumber">Volume number</label>
                <input
                    type='text'
                    placeholder='Volume number of the article'
                    name='volumeNumber'
                    onChange={(e) => setVolumeNumber(e.target.value)}
                    value={volumeNumber}
                />
                <label htmlFor="pages">Pages</label>
                <input
                    type='text'
                    placeholder='Page number of the article'
                    name='pages'
                    onChange={(e) => setPages(e.target.value)}
                    value={pages}
                />
                <label htmlFor="doi">DOI</label>
                <input
                    type='text'
                    placeholder='DOI of the article'
                    name='doi'
                    onChange={(e) => setDoi(e.target.value)}
                    value={doi}
                />
                <button className="action-button">Submit article</button>
            </form>
        </section>
    )
    return content
}


export default SubmitArticle