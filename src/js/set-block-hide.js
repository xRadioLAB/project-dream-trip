const setBlockHide = ({
    regexp,
    regexp2,
    $array,
}) => {
    if ($array && regexp) {
        const isHide = (text) => (text.indexOf(regexp) !== -1 || text.indexOf(regexp2) !== -1);
        $array.each((i, e) => {
            const $e = $(e);
            const text = $e.text();
            const _isHide = isHide(text);
            // console.log(text, _isHide);
            if (_isHide) {
                $e.addClass('hide');
            }
        });
    }
};

export default setBlockHide;