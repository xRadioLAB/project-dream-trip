export default ({
    $target,
    isMobile
}) => {
    const date = new Date();
    const targetBlank = 'target="_blank"';
    const hrefCom = 'href="http://www.xinhuanet.com"';
    const hrefLtd = 'href="http://www.xinhuanet.ltd"';
    const mobileBr = isMobile ? '<br>' : '';
    const dom = `
        <div class="footer">
            Copyright &copy; 2000 - ${date.getFullYear()} 
            <a ${hrefCom} ${targetBlank}>XINHUANET.com</a>
            ${mobileBr}
            All Rights Reserved.<br>
            制作单位：<a ${hrefLtd} ${targetBlank}>新华网股份有限公司</a>
            ${mobileBr}
            版权所有 <a ${hrefLtd} ${targetBlank}>新华网股份有限公司</a>
        </div>
    `;
    $target.append(dom);
};