let dal = require("../../Dal/Utility/Backup");

exports.Backup = ({ inResponse, inDataPk, callback }) => {
    dal.DataBackUpWithPassword({ inResponse, inDataPk, callback });
};

exports.BackupToMail = async ({ inDataPk }) => {
    return await dal.DataBackUpWithPassword({ inDataPk });
};