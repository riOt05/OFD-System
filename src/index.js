import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root  = ReactDOM.createRoot(document.querySelector('.subContainer'));

if(window.location.pathname === '/payment' ){
import('./components/sh/option').then(Res=>{
    let Page = Res.default
    root.render(<Page />);    
})
}
else if(window.location.pathname === '/billPay'){
import('./components/sh/billPay.jsx').then(Res=>{
    let Page = Res.default
    root.render(<Page />);   
})
}
else if(window.location.pathname === '/end'){
import('./components/sh/final.jsx').then(Res=>{
    let Page = Res.default
    root.render(<Page />);   
})
}
else if(window.location.pathname === '/upi'){
import('./components/sh/upi.jsx').then(Res=>{
    let Page = Res.default
    root.render(<Page />);   
})
}
else if(window.location.pathname === '/card'){
import('./components/sh/card.jsx').then(Res=>{
    let Page = Res.default
    root.render(<Page />);    
})
}
else if(window.location.pathname === '/cashOnDel'){
    import('./components/sh/cashOnDel').then(Res=>{
        let Page = Res.default
        root.render(<Page />);  
})
}
else if(window.location.pathname === '/dineIn' || window.location.pathname === '/takeAway'){
     import("./components/chithu/Package").then(Res=>{
        let Page = Res.default
        root.render(<Page />);  
    })
}
else{
    import("./components/chithu/Package").then(Res=>{
        let Page = Res.default
        root.render(<Page />);  
    })
}

