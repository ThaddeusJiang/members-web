export const standard: () => { todo: Todo } = () => ({
  todo: {
    id: "1",
    title: "jiang さんの入社手続き",
    targetDateTitle: "入社予定日",
    targetDate: "2020-01-01",
    state: "inProgress",
    tasks: [
      {
        id: "1",
        title: "書類を準備しておく",
        deadlineType: "day",
        deadlineValue: -1,
        items: [
          {
            title:
              "「雇用契約書」を用意しましょう。\n自社にひな形がない場合は、 SmartHR 書類ひな型をご活用ください。",
            checked: false,
          },
          {
            title:
              "完成見本を参考に`F`を用意しましょう。扶養家族がいない場合でも作成が必要です。",
            checked: false,
          },
        ],
      },
      {
        id: "2",
        title: "従業員から書類等を受け取る",
        deadlineType: "day",
        deadlineValue: 0,
        items: [
          {
            title:
              "マイナンバーを登録しましょう。\n書類作成の際に必要となります。管理者は SmartHR 上からマイナンバーの提供を依頼することができます。",
            checked: false,
          },
          {
            title: `年金手帳・基礎年金番号通知書のコピーを受け取りましょう。以前の職場か、従業員ご自身が保管されています。
            紛失された場合は再発行も可能です。詳細は下記のヘルプを御覧ください。

            [入社時に必要な書類（従業員向け） – SmartHR ヘルプセンター](https://help.spa-hr.app)`,
            checked: false,
          },
          {
            title: `源泉徴収票を受け取りましょう。
              従業員が前の職場から退職時に受け取る書類です。年末調整に使用します。
              紛失された場合は再発行も可能です。詳細は下記のヘルプを御覧ください。

              入社時に必要な書類（従業員向け） – SmartHR ヘルプセンター`,
            checked: false,
          },
          {
            title: "雇用保険被保険者証を受け取りましょう。",
            checked: false,
          },
          {
            title: "健康診断書を受け取りましょう。",
            checked: false,
          },
        ],
      },
    ],
    rateOfProgress: "3/7",
  },
});
