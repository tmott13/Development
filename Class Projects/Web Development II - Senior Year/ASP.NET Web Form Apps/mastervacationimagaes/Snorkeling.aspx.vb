
Partial Class Snorkeling
    Inherits System.Web.UI.Page

    Protected Sub Button2_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnCancel.Click
        ddlExpedition.SelectedIndex = 0
        lblMessage.Text = String.Empty

        'Clear the checkboxlist
        Dim item As ListItem
        For Each item In chkEquipment.Items
            item.Selected = False

        Next
        lstSummary.Items.Clear()
        txtName1.Text = ""
        txtName2.Text = ""
        rblTime.Items.Clear()
    End Sub

    Protected Sub Button1_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnConfirm.Click
        lstSummary.Items.Clear()
        ' what is the name
        If txtName1.Text = String.Empty Then
            lblMessage.Text = "Please enter a reservation name."
            Return
        Else
            lstSummary.Items.Add("Name = " & txtName1.Text)
        End If

        If txtName2.Text = String.Empty Then
            lblMessage.Text = "Please enter a reservation name."
            Return
        Else
            lstSummary.Items.Add("Name = " & txtName2.Text)
        End If

        'which tour has been selected?
        lblMessage.Text = String.Empty
        If ddlExpedition.SelectedIndex = 0 Then
            lblMessage.Text = "Please select an expedition."
            Return
        Else
            lstSummary.Items.Add("Expedition = " & ddlExpedition.Text)

        End If


        'Which tour time has been selected?
        If rblTime.SelectedIndex = -1 Then
            lblMessage.Text = "Please select a tour time type."
            Return
        Else
            lstSummary.Items.Add("Tour Time = " & rblTime.SelectedItem.ToString())
        End If


        'selected optional equipment

        Dim item As ListItem
        For Each item In chkEquipment.Items
            If item.Selected Then
                lstSummary.Items.Add(item.Text)

            End If
        Next
    End Sub
End Class
