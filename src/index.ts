import "./styles/styles.scss";
import "./scripts/app"

const scooterName: NodeListOf<HTMLElement> = document.querySelectorAll('.product-card__title'); 

const partsImage: NodeListOf<HTMLElement> = document.querySelectorAll('.product-modal__parts-image');

const partsChart: HTMLElement = document.querySelector('.product-modal__parts-wrapper'); 

const partsInfo: NodeListOf<HTMLElement> = document.querySelectorAll('.product-modal__parts'); 

const removePart: NodeListOf<HTMLElement> = document.querySelectorAll('.product-modal__parts-remove'); 

const addtocart = (partsData: any) => {
    console.log('Adding to cart');
    fetch("/cart/add.js", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(partsData),
    })
    .then(async (response) => {
        const result = await response.json();
        console.log(result);
        return result;
    })
    .catch((error) => {
        console.error("Error:", error);
    })
};

const addPart = (partID: string) => {
    partsInfo.forEach(($element: HTMLElement) => { 
        const partsDetailsID: string = $element.getAttribute('data-id');
        if(partID === partsDetailsID) {
            $element.classList.remove('hide');

            let addedPartsData: any = {};
            addedPartsData = {
                id: partID,
                quantity: 1,
            }

            addtocart(addedPartsData);
        } 
    });
};

partsImage.forEach(($element: HTMLElement) => { 
    const partsImageID: string = $element.getAttribute('data-id');
   
    $element.addEventListener("click", () => { 
        partsChart.classList.remove('hide');   
        
        addPart(partsImageID);
    }); 
});

scooterName.forEach(($element: HTMLElement) => { 
    $element.addEventListener("click", () => { 
        if(!$element.classList.contains('active')) {
            $element.classList.add('active'); 
        } else {
            $element.classList.remove('active');    
        }
    }); 
});

removePart.forEach(($element: HTMLElement) => {
    $element.addEventListener("click", () => { 
        $element.parentElement.classList.add('hide');

        if (partsInfo.length === 0) {
            partsChart.classList.add('hide');
        }
    }); 
});