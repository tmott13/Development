
Partial Class _Default
    Inherits System.Web.UI.Page

    Protected Sub btnCancel_Click(sender As Object, e As System.EventArgs) Handles btnCancel.Click
        ddlTours.SelectedIndex = 0
        lstKayak.SelectedIndex = -1

        Dim item As ListItem
        For Each item In chkEquipment.Items
            item.Selected = False
        Next
        lstSummary.Items.Clear()



    End Sub

    Protected Sub btnConfirm_Click(sender As Object, e As System.EventArgs) Handles btnConfirm.Click
        With lstSummary
            .Items.Clear()

            If ddlTours.SelectedIndex = 0 Then
                .Items.Add("A tour must be selected")
                Exit Sub

            End If

            If lstKayak.SelectedIndex = -1 Then
                .Items.Add("A kayak type must be selected")
                Exit Sub
            End If

            .Items.Add("Tour = " & ddlTours.Text)
            .Items.Add("Kayak = " & lstKayak.SelectedItem.ToString())

            Dim item As ListItem
            For Each item In chkEquipment.Items
                If item.Selected Then
                    .Items.Add(item.Text)
                End If
            Next

        End With
    End Sub
End Class
