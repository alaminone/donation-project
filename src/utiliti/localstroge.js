

const getStoreDonationDetelis = ()=>{
const storeDonationDetelis = localStorage.getItem("Donation-detelis")
if(storeDonationDetelis){
    return JSON.parse(storeDonationDetelis)
}else{
return [];
}
}




const saveDonationDetelis = (id) =>{
const saveDonationDeteliss = getStoreDonationDetelis();

const exsis = saveDonationDeteliss.find(donationDetelisId => donationDetelisId === id);
if(!exsis){
    saveDonationDeteliss.push(id);
    localStorage.setItem("Donation-detelis",JSON.stringify(saveDonationDeteliss));
}

}

export {getStoreDonationDetelis, saveDonationDetelis}