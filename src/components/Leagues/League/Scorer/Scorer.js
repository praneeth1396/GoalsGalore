import React from 'react';

const scorer = (props) => {
    return (
        <tr>
            <td> {props.scorer_info.player} </td>
            <td> {props.scorer_info.club} </td>
            <td> {props.scorer_info.goals} </td>
        </tr>
    );
};

export default scorer;