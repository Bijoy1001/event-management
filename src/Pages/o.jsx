


const [service, setService] = useState([]);
useEffect (() =>{
    fetch ('services.json')
    .then(res => res.json())
    .then(data => setService(data));
}, [])