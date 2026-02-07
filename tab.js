   
  function fetchCryptoPrices() {



    
    
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,solana,ripple,algorand,harmony,tron,dash,waves,zilliqa,cardano,celo&vs_currencies=usd')
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
          // Extract the prices from the response
          const btcPrice = data.bitcoin.usd;
          const ethPrice = data.ethereum.usd;
         const ltcPrice = data.litecoin.usd;
         // const bchPrice = data.bitcoincash.usd;
          const solPrice = data.solana.usd;
           const xrpPrice = data.ripple.usd;
        //   const bnbPrice = data.beaconchain.usd;
        //   const bnbsPrice = data.beaconsmartchain.usd;
          const algPrice = data.algorand.usd;
        //   const xmrPrice = data.montero.usd;
          const onePrice = data.harmony.usd;
        //   const nasPrice = data.nebulas.usd;
           const trxPrice = data.tron.usd;
        //   const viaPrice = data.viacoin.usd;
        //   const daiPrice = data.dai.usd;
        //   const usdt1Price = data.tether.usd;
        //   const usdt2Price = data.tether.usd;
        //   const usdt3Price = data.tether.usd;
        //   const busdPrice = data.bnbusd.usd;
        //   const busdpPrice = data.bnbusd.usd;
          const dashPrice = data.dash.usd;
        //   const thorPrice = data.thorchain.usd;
          const wavesPrice = data.waves.usd;
          const zilPrice = data.zilliqa.usd;
        //   const alpPrice = data.alpaca.usd;
        //   const usdcPrice = data.usdc.usd;
        //   const dogePrice = data.dogecoin.usd;
          const carPrice = data.cardano.usd;
          const celoPrice = data.celo.usd;
        //   const maticPrice = data.polygon.usd;
        //   const thcPrice = data.thundercoin.usd;
        //   const ethcPrice = data.ethereumclassic.usd;
        //   const arbPrice = data.ethereumarbitrium.usd;
          
          
         
          // Update the content of the divs with the prices
          document.getElementById('Btccoin-price').textContent = ` $${btcPrice.toFixed(2)}`;
          document.getElementById('Ethcoin-price').textContent = ` $${ethPrice.toFixed(2)}`;
           document.getElementById('Ltccoin-price').textContent = ` $${ltcPrice.toFixed(2)}`;
          //document.getElementById('Bchcoin-price').textContent = ` $${ltcPrice.toFixed(2)}`;
          document.getElementById('Solcoin-price').textContent = ` $${solPrice.toFixed(2)}`;
          document.getElementById('Xrpcoin-price').textContent = ` $${xrpPrice.toFixed(2)}`;
        //   document.getElementById('Bnbcoin-price').textContent = ` $${xrpPrice.toFixed(2)}`;
        //   document.getElementById('Bnbscoin-price').textContent = ` $${xrpPrice.toFixed(2)}`;
          document.getElementById('Algocoin-price').textContent = ` $${algPrice.toFixed(2)}`;
        //   document.getElementById('Xmrcoin-price').textContent = ` $${xrpPrice.toFixed(2)}`;
          document.getElementById('Onecoin-price').textContent = ` $${onePrice.toFixed(2)}`;
        //   document.getElementById('Nascoin-price').textContent = ` $${xrpPrice.toFixed(2)}`;
           document.getElementById('Trxcoin-price').textContent = ` $${trxPrice.toFixed(2)}`;
        //   document.getElementById('Viacoin-price').textContent = ` $${xrpPrice.toFixed(2)}`;
        //   document.getElementById('Daicoin-price').textContent = ` $${xrpPrice.toFixed(2)}`;
        //   document.getElementById('Usdtcoin1-price').textContent = ` $${xrpPrice.toFixed(2)}`;
        //   document.getElementById('Usdtcoin2-price').textContent = ` $${xrpPrice.toFixed(2)}`;
        //   document.getElementById('Usdtcoin3-price').textContent = ` $${xrpPrice.toFixed(2)}`;
        //   document.getElementById('Busdcoin-price').textContent = ` $${xrpPrice.toFixed(2)}`;
        //   document.getElementById('Busdpcoin-price').textContent = ` $${xrpPrice.toFixed(2)}`;
          document.getElementById('Dashcoin-price').textContent = ` $${dashPrice.toFixed(2)}`;
        //   document.getElementById('Runecoin-price').textContent = ` $${xrpPrice.toFixed(2)}`;
          document.getElementById('Wavescoin-price').textContent = ` $${wavesPrice.toFixed(2)}`;
          document.getElementById('Zilcoin-price').textContent = ` $${zilPrice.toFixed(2)}`;
        //   document.getElementById('Alpcoin-price').textContent = ` $${xrpPrice.toFixed(2)}`;
        //   document.getElementById('Usdccoin-price').textContent = ` $${xrpPrice.toFixed(2)}`;
          document.getElementById('Adacoin-price').textContent = ` $${carPrice.toFixed(2)}`;
        //   document.getElementById('Dogecoin-price').textContent = ` $${xrpPrice.toFixed(2)}`;
          document.getElementById('Celocoin-price').textContent = ` $${celoPrice.toFixed(2)}`;
        //   document.getElementById('Maticcoin-price').textContent = ` $${xrpPrice.toFixed(2)}`;
        //   document.getElementById('TTcoin-price').textContent = ` $${xrpPrice.toFixed(2)}`;
        //   document.getElementById('Ethccoin-price').textContent = ` $${xrpPrice.toFixed(2)}`;
        //   document.getElementById('Arbcoin-price').textContent = ` $${xrpPrice.toFixed(2)}`;
          
        })
        .catch(error => {
          // Handle any errors that occur during the fetch
          console.error('Error fetching cryptocurrency prices:', error);
          document.getElementById('Btccoin-price').textContent = '90,288.80';
          document.getElementById('Ethcoin-price').textContent = '3,340.49';
           document.getElementById('Ltccoin-price').textContent = '100.94';
         // document.getElementById('Bchcoin-price').textContent = 'Err';
          document.getElementById('Solcoin-price').textContent = '183.21 ';
       document.getElementById('Xrpcoin-price').textContent = '2.16';
        //   document.getElementById('Bnbcoin-price').textContent = 'Err';
        //   document.getElementById('Bnbscoin-price').textContent = 'Err';
          document.getElementById('Algocoin-price').textContent = '0.11';
        //   document.getElementById('Xmrcoin-price').textContent = 'Err';
          document.getElementById('Onecoin-price').textContent = 'Err';
        //   document.getElementById('Nascoin-price').textContent = 'Err';
           document.getElementById('Trxcoin-price').textContent = 'Err';
        //   document.getElementById('Viacoin-price').textContent = 'Err';
        //   document.getElementById('Daicoin-price').textContent = 'Err';
        //   document.getElementById('Usdtcoin1-price').textContent = 'Err';
        //   document.getElementById('Usdtcoin2-price').textContent = 'Err';
        //   document.getElementById('Usdtcoin3-price').textContent = 'Err';
        //   document.getElementById('Busdcoin-price').textContent = 'Err';
        //   document.getElementById('Busdpcoin-price').textContent = 'Err';
          document.getElementById('Dashcoin-price').textContent = 'Err';
        //   document.getElementById('Runecoin-price').textContent = 'Err';
          document.getElementById('Wavescoin-price').textContent = 'Err';
          document.getElementById('Zilcoin-price').textContent = 'Err';
        //   document.getElementById('Alpcoin-price').textContent = 'Err';
        //   document.getElementById('Usdccoin-price').textContent = 'Err';
          document.getElementById('Adacoin-price').textContent = 'Err';
        //   document.getElementById('Dogecoin-price').textContent = 'Err';
          document.getElementById('Celocoin-price').textContent = 'Err';
        //   document.getElementById('Maticcoin-price').textContent = 'Err';
        //   document.getElementById('TTcoin-price').textContent = 'Err';
        //   document.getElementById('Ethccoin-price').textContent = 'Err';
        //   document.getElementById('Arbcoin-price').textContent = 'Err';
        });

        
    }

    // Call the function to fetch the prices when the page loads
    
    window.onload = fetchCryptoPrices();




function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
                 
  function myFunction() { 
      
      
      
      
                      var Taskbar = document.getElementById("taskbarwrapper"); 
                      Taskbar.style.visibility = "visible";
                      Taskbar.style.position = "absolute";
      
  
                 }
  function Cancelbtn() { 
      
      
      
      
                      var Taskbar = document.getElementById("taskbarwrapper"); 
                      Taskbar.style.visibility = "hidden";
                      //Taskbar.style.position = "relative";
      
  
                 }
  
  
   function Personal(){
  
  
                  document.innerHTML = document.location = "broker site settings.html"
   }  
   
   
   function We(){
  
                   document.innerHTML = document.location = "broker site landing page.html"
  
   }
  
   
   function Out(){
  
                   document.innerHTML = document.location = "signed in.html"
  
   }
  //API'S SECTION DND *********************************************************************
  
  
  //DND ***********************************************************************************
  
  //HIDE BAL 
  
                  
  
               // document.getElementById("hide").addEventListener("click", Balance);
  
  
  
  function hideBal(){  
                      var hideBtn = document.getElementById("hide");
  
                      var currentBal = document.getElementById("currentBal");
                      currentBal.innerHTML = "****";
                      
  
                      hideBtn.innerHTML = "&#9787";
  
                   // hideBtn.addEventListener("click", showBal);
                      
                      
  
                  }
  
  
  
                  function showBal(){
  
                      var currentBal = document.getElementById("currentBal");
                      var savedBal = localStorage.getItem("SavedBal");
                      
                      var hideBtn = document.getElementById("hide");
                      hideBtn.innerHTML = "&#9786";
  
                      
                      if(savedBal){
  
                          currentBal.innerText = savedBal;
                          
                          
      
      }
                  }
  
  
  
   function Balance(){
  
  
      var hideBtn = document.getElementById("hide");
  
      var currentBal = document.getElementById("currentBal");
      var savedBal = localStorage.getItem("SavedBal");
  
      if(currentBal.innerHTML!="****"){
  
          hideBal();
  
  
      } 
  
      else{
  
          showBal();
      }
  
      
      
     
      }
  
  function load(){
   
   // WALLET BALANCE ONLOAD ------------------------------------------ 
  var currentBal = document.getElementById("currentBal");
   var savedBal = localStorage.getItem("SavedBal");
   
     
  
   
   if(savedBal){
  
      currentBal.innerText = savedBal;
     
      
      }
   
   if(hideBal()){
  
     currentBal.innerText = "****";
     
      
   }
  
     
  
      
  
   
  // WALLET BALANCE ONLOAD----------------------------------------------
  
  }
  
  
  // COIN PRICE CODE ----------------------------------------------------
  function load2(){
  
  var demo = document.getElementById("wallet-price");
  
  var Demo = localStorage.getItem("SavedBCoinAmt");
  
  if(Demo){
  
      demo.innerHTML = Demo;
      
  }
  
  //  ETHERUM ONLOAD CODE
  
  var demoE = document.getElementById("Ewallet-price");
  
  var DemoE = localStorage.getItem("SavedECoinAmt");
  
  if(DemoE){
  
      demoE.innerHTML = DemoE;
      
  }
  
  //      LITCOIN ONLOAD CODE
  
  var demoL = document.getElementById("Lwallet-price");
  
  var DemoL = localStorage.getItem("SavedLTCoinAmt");
  
  if(DemoL){
  
      demoL.innerHTML = DemoL;
      
  }
  
  //      BITCOIN CASH ONLOAD CODE
  
  var demoBCH = document.getElementById("BCHwallet-price");
  
  var DemoBCH = localStorage.getItem("SavedBCHCoinAmt");
  
  if(DemoBCH){
  
      demoBCH.innerHTML = DemoBCH;
       
  }
  
  //      SOLANA ONLOAD CODE
  
  var demoSOL = document.getElementById("SOLwallet-price");
  
  var DemoSOL = localStorage.getItem("SavedSOLCoinAmt");
  
  if(DemoSOL){
  
      demoSOL.innerHTML = DemoSOL;
       
  }
  
  
  //      XRP ONLOAD CODE
  
  var demoXRP = document.getElementById("Rwallet-price");
  
  var DemoXRP = localStorage.getItem("SavedXRPCoinAmt");
  
  if(DemoXRP){
  
      demoXRP.innerHTML = DemoXRP;
       
  }
  //      BNBC ONLOAD CODE
  
  var demoBNBC = document.getElementById("BNBCwallet-price");
  
  var DemoBNBC = localStorage.getItem("SavedBNBCCoinAmt");
  
  if(DemoBNBC){
  
      demoBNBC.innerHTML = DemoBNBC;
       
  }
  
  
  //      BNBS ONLOAD CODE
  
  var demoBNBS = document.getElementById("BNBSwallet-price");
  
  var DemoBNBS = localStorage.getItem("SavedBNBSCoinAmt");
  
  if(DemoBNBS){
  
      demoBNBS.innerHTML = DemoBNBS;
       
  }
  
  //      ALG ONLOAD CODE
  
  var demoALG = document.getElementById("ALGwallet-price");
  
  var DemoALG = localStorage.getItem("SavedALGCoinAmt");
  
  if(DemoALG){
  
      demoALG.innerHTML = DemoALG;
       
  }
  
  //      MXR ONLOAD CODE
  
  var demoMXR = document.getElementById("MXRwallet-price");
  
  var DemoMXR = localStorage.getItem("SavedMXRCoinAmt");
  
  if(DemoMXR){
  
      demoMXR.innerHTML = DemoMXR;
       
  }
  
  //      HAR ONLOAD CODE
  
  var demoHAR = document.getElementById("HARwallet-price");
  
  var DemoHAR = localStorage.getItem("SavedHARCoinAmt");
  
  if(DemoHAR){
  
      demoHAR.innerHTML = DemoHAR;
       
  }
  
  
  //     NEB ONLOAD CODE
  
  var demoNEB = document.getElementById("NEBwallet-price");
  
  var DemoNEB = localStorage.getItem("SavedNEBCoinAmt");
  
  if(DemoNEB){
  
      demoNEB.innerHTML = DemoNEB;
       
  }
  
  
  
  
  //     TRON ONLOAD CODE
  
  var demoTRON = document.getElementById("TRONwallet-price");
  
  var DemoTRON = localStorage.getItem("SavedTRONCoinAmt");
  
  if(DemoTRON){
  
      demoTRON.innerHTML = DemoTRON;
       
  }
  
  
  
  
  //     VIA ONLOAD CODE
  
  var demoVIA = document.getElementById("VIAwallet-price");
  
  var DemoVIA = localStorage.getItem("SavedVIACoinAmt");
  
  if(DemoVIA){
  
      demoVIA.innerHTML = DemoVIA;
       
  }
  
  //     POSS ONLOAD CODE
  
  var demoPOSS = document.getElementById("POSSwallet-price");
  
  var DemoPOSS = localStorage.getItem("SavedPOSSCoinAmt");
  
  if(DemoPOSS){
  
      demoPOSS.innerHTML = DemoPOSS;
       
  }
  
  
  //     POSUSDT ONLOAD CODE
  
  var demoPOSUSDT = document.getElementById("POSUSDTwallet-price");
  
  var DemoPOSUSDT = localStorage.getItem("SavedPOSUSDTCoinAmt");
  
  if(DemoPOSUSDT){
  
      demoPOSUSDT.innerHTML = DemoPOSUSDT;
       
  }
  
  
  //     USDT ONLOAD CODE
  
  var demoUSDT = document.getElementById("USDTwallet-price");
  
  var DemoUSDT = localStorage.getItem("SavedUSDTCoinAmt");
  
  if(DemoUSDT){
  
      demoUSDT.innerHTML = DemoUSDT;
       
  }
  
  
  //     USDT2 ONLOAD CODE
  
  var demoUSDT2 = document.getElementById("USDT2wallet-price");
  
  var DemoUSDT2 = localStorage.getItem("SavedUSDT2CoinAmt");
  
  if(DemoUSDT2){
  
      demoUSDT2.innerHTML = DemoUSDT2;
       
  }
  
  
  //    BNBUSD ONLOAD CODE
  
  var demoBNBUSD = document.getElementById("BNBUSDwallet-price");
  
  var DemoBNBUSD = localStorage.getItem("SavedBNBUSDCoinAmt");
  
  if(DemoBNBUSD){
  
      demoBNBUSD.innerHTML = DemoBNBUSD;
       
  }
  
  
  //    BNBP ONLOAD CODE
  
  var demoBNBP = document.getElementById("BNBPwallet-price");
  
  var DemoBNBP = localStorage.getItem("SavedBNBPCoinAmt");
  
  if(DemoBNBP){
  
      demoBNBP.innerHTML = DemoBNBP;
       
  }
  
  
  //     DASH ONLOAD CODE
  
  var demoDASH = document.getElementById("DASHwallet-price");
  
  var DemoDASH = localStorage.getItem("SavedDASHCoinAmt");
  
  if(DemoDASH){
  
      demoDASH.innerHTML = DemoDASH;
       
  }
  
  //     THOR ONLOAD CODE
  
  var demoTHOR = document.getElementById("THORwallet-price");
  
  var DemoTHOR = localStorage.getItem("SavedTHORCoinAmt");
  
  if(DemoTHOR){
  
      demoTHOR.innerHTML = DemoTHOR;
       
  }
  
  //     WAVE ONLOAD CODE
  
  var demoWAVE = document.getElementById("WAVEwallet-price");
  
  var DemoWAVE = localStorage.getItem("SavedWAVECoinAmt");
  
  if(DemoWAVE){
  
      demoWAVE.innerHTML = DemoWAVE;
       
  }
  
  //     ZIL ONLOAD CODE
  
  var demoZIL = document.getElementById("ZILwallet-price");
  
  var DemoZIL = localStorage.getItem("SavedZILCoinAmt");
  
  if(DemoZIL){
  
      demoZIL.innerHTML = DemoZIL;
       
  }
  
  //     ALP ONLOAD CODE
  
  var demoALP = document.getElementById("ALPwallet-price");
  
  var DemoALP = localStorage.getItem("SavedALPCoinAmt");
  
  if(DemoALP){
  
      demoALP.innerHTML = DemoALP;
       
  }
  
  //     USDC ONLOAD CODE
  
  
  var demoUSDC = document.getElementById("USDCwallet-price");
  
  var DemoUSDC = localStorage.getItem("SavedUSDCCoinAmt");
  
  if(DemoUSDC){
  
  
  
      demoUSDC.innerHTML = DemoUSDC;
       
  }
  
  //     DOGE ONLOAD CODE
  
  var demoDOGE = document.getElementById("DOGEwallet-price");
  
  var DemoDOGE = localStorage.getItem("SavedDOGECoinAmt");
  
  if(DemoDOGE){
  
      demoDOGE.innerHTML = DemoDOGE;
       
  }
  //     CAR ONLOAD CODE
  
  var demoCAR = document.getElementById("CARwallet-price");
  
  var DemoCAR = localStorage.getItem("SavedCARCoinAmt");
  
  if(DemoCAR){
  
      demoCAR.innerHTML = DemoCAR;
       
  }
  
  
  
  //     CELO ONLOAD CODE
  
  var demoCELO = document.getElementById("CELOwallet-price");
  
  var DemoCELO = localStorage.getItem("SavedCELOCoinAmt");
  
  if(DemoCELO){
  
      demoCELO.innerHTML = DemoCELO;
       
  }
  
  
  //     MATIC ONLOAD CODE
  
  var demoMATIC = document.getElementById("MATICwallet-price");
  
  var DemoMATIC = localStorage.getItem("SavedMATICCoinAmt");
  
  if(DemoMATIC){
  
      demoMATIC.innerHTML = DemoMATIC;
       
  }
  
  
  //     THUND ONLOAD CODE
  
  var demoTHUND = document.getElementById("THUNDwallet-price");
  
  var DemoTHUND = localStorage.getItem("SavedTHUNDCoinAmt");
  
  if(DemoTHUND){
  
      demoTHUND.innerHTML = DemoTHUND;
       
  }
  
  
  //     ETHC ONLOAD CODE
  
  var demoETHC = document.getElementById("ETHCwallet-price");
  
  var DemoETHC = localStorage.getItem("SavedETHCCoinAmt");
  
  if(DemoETHC){
  
      demoETHC.innerHTML = DemoETHC;
       
  }
  
  
  //     ARB ONLOAD CODE
  
  var demoARB = document.getElementById("ARBwallet-price");
  
  var DemoARB = localStorage.getItem("SavedARBCoinAmt");
  
  if(DemoARB){
  
      demoARB.innerHTML = DemoARB;
       
  }
  
  
  
  
  
  }  
  
  //THIS IS THE API FOR COIN PRICE FROM LIFE SOURCE
  
  
  
  window.onload = load();
  
  window.onload = load2();
  
  //window.onload = load3();
  
  
  
  
  
  
  