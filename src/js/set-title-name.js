const setTitleName = ({ columnName }) => {
    if (columnName) {
        $('title').prepend(columnName + '_');
    }
};

export default setTitleName;