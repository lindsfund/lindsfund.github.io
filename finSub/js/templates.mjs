export function headerTemplate(){
    const newHdr = `<div id="hdrImg">
    <h1>My Garden Journal</h1>
    <img src="img/grass.svg" alt="green grass">
</div>`

return newHdr;
}

export function footerTemplate(){
    const newFtr = `<div class="footPanel">
    <div class="grdLayout">
        <button type="button" class="button btnGP">Garden Plan</button>
    </div>
    <div class="addSeed">
        <button type="button" class="button btnAS"><span>&#43;</span>
        </button>
    </div>
    <div class="seedDtBs">
        <button type="button" class="button btnSD">Seed Database</button>
    </div>
</div>`

return newFtr;
}