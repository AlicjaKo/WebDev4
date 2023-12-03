Characters = async () => {
    try {
        const response = await fetch('https://thronesapi.com/api/v2/Characters');
        const output = await response.json();
        const Stark = output.filter(x => x.family === 'House Stark');
        Stark.forEach(element => {
            console.log(element.fullName);
        });
    }
    catch (error) {
        console.error(error);
    }
}

Characters();