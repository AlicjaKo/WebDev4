Characters = async () => {
    try {
        const response = await fetch('https://thronesapi.com/api/v2/Characters');
        const output = await response.json();
        const families = output
        .map(output => output.family)
        .filter(x => x.includes('House'))

        const newFamilies = [...new Set(families)];

        newFamilies.forEach(element => {
            console.log(element);
        });
    }
    catch (error) {
        console.error(error);
    }
}

Characters();