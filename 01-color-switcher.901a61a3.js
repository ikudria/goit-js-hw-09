!function(){var t={intervalId:null,isActive:!1,start:function(){this.isActive||(this.isActive=!0,document.querySelector("button[data-start]").style.opacity=.5,this.intervalId=setInterval((function(){document.querySelector("body").style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3))},stop:function(){clearInterval(this.intervalId),this.isActive=!1,document.querySelector("button[data-start]").style.opacity=1}};document.querySelector("button[data-start]").addEventListener("click",(function(){t.start()})),document.querySelector("button[data-stop]").addEventListener("click",(function(){t.stop()}))}();
//# sourceMappingURL=01-color-switcher.901a61a3.js.map
