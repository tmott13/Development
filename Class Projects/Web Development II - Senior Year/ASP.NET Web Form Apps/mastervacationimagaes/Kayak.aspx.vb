
Partial Class Kayak
    Inherits System.Web.UI.Page

    Protected Sub btnCancel_Click(sender As Object, e As System.EventArgs) Handles btnCancel.Click
        ddlTour.SelectedIndex = 0
        lstKayak.SelectedIndex = -1
        lblMessage.Text = String.Empty

        'Clear the checkboxlist
        Dim item As ListItem
        For Each item In chkEquipment.Items
            item.Selected = False

        Next
        lstSummary.Items.Clear()
        txtName.Text = ""
        rblTourTime.Items.Clear()


    End Sub

    Protected Sub btnConfirm_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnConfirm.Click

        lstSummary.Items.Clear()
        ' what is the name
        If txtName.Text = String.Empty Then
            lblMessage.Text = "Please a reservation name."
            Return
        Else
            lstSummary.Items.Add("Name: = " & txtName.Text)
        End If


        'which tour has been selected?
        lblMessage.Text = String.Empty
        If ddlTour.SelectedIndex = 0 Then
            lblMessage.Text = "Please select a tour."
            Return
        Else
            lstSummary.Items.Add("Tour = " & ddlTour.Text)

        End If

        'Which kayak has been selected?
        If lstKayak.SelectedIndex = -1 Then
            lblMessage.Text = "Please select a kayak type."
            Return
        Else
            lstSummary.Items.Add("Kayak = " & lstKayak.SelectedItem.ToString())
        End If

        'Which tour time has been selected?
        If rblTourTime.SelectedIndex = -1 Then
            lblMessage.Text = "Please select a tour time type."
            Return
        Else
            lstSummary.Items.Add("Tour Time = " & rblTourTime.SelectedItem.ToString())
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
