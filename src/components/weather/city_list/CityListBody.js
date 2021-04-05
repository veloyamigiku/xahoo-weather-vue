import classes from './CityListBody.module.css';

const CityListBody = function(props) {

    var cityListBodyItemList = [];
    props.data.forEach(function (item, itemIdx) {
        cityListBodyItemList.push(
            <div className={classes.CityListBodyItem} key={itemIdx}>
                <div>・</div>
                <div><a href="http://localhost:3000">{item}</a></div>
            </div>
        );
    });

    return (
        <div className={classes.CityListBody}>
            {cityListBodyItemList}
        </div>
    );
}

export default CityListBody;
