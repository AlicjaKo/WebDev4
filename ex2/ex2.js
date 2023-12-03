Characters = async () => {
    try {
        const response = await fetch('https://thronesapi.com/api/v2/Characters');
        const output = await response.json();
        const Davos = output.find(name => name.fullName === 'Davos Seaworth');
        const DavosId = Davos.id;
        console.log(DavosId);
        output.forEach(element => {
            element.id === DavosId ? console.log(element) : null;
        });    
    }
    catch (error) {
        console.error(error);
    }
}

Characters();