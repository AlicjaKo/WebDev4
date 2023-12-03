Holidays = async () => {
    try {
        const response = await fetch('https://date.nager.at/api/v3/PublicHolidays/2023/fi');
        const output = await response.json();
        output.forEach(o => {
            console.log(`${o.date} : ${o.name} / ${o.localName}`);
        });
    }
    catch (error) {
        console.error("something went wrong");
    }
}

Holidays();