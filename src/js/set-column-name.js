const setColumnName = ({
    columnName,
    columnTag
}) => {
    if (columnName) {
        $(columnTag).html(columnName);
    }
};

export default setColumnName;