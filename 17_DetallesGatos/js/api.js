const options = {
    headers: {
        'x-api-key': 'live_J0DMLZ1QFR6gb7nbZ1WU7kwLo4rO155BLpiZqH7yFDfobadIL5KS7eUKkdLrqOWT'
    }
}

function getPageCount(response) {
    const total = parseInt(response.headers.get('Pagination-Count'));
    const limit = parseInt(response.headers.get('Pagination-Limit'));
    return Math.ceil(total / limit);
}

export async function getBreeds(page, limit){
    const apiUrl = "https://api.thecatapi.com/v1/breeds";
    try {
        const response = await fetch(`${apiUrl}?limit=${limit}&page=${page - 1}`, options); 
        if(!response.ok){
            throw new Error("Error " + response.status)
        }
        
        let pageCount = getPageCount(response);
        return {
            breeds: await response.json(),
            pageCount
        };
    }catch (error) {
        console.error(error);
    }
}

export async function getBreed(id){
    const detailsApi = "https://api.thecatapi.com/v1/images/";
    try{
        const response = await fetch(`${detailsApi}${id}`);
        if(!response.ok){
            throw new Error("Error " + response.status)
        }
        console.log(response);
        return await response.json();
    }catch(error){
        console.error(error);
    }
}