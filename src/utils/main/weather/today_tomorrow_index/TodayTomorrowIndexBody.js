export const fromIndexLevelToAllHalfNoCount = function (indexLevel) {
    var halfCount = 0
    if (indexLevel - parseInt(indexLevel) > 0) {
        halfCount = 1
    }
    var allCount = parseInt(indexLevel)
    var noCount = 5 - allCount - halfCount
    return {
        allCount,
        halfCount,
        noCount
    }
}
