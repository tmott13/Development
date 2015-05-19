
Partial Class Flowers
    Inherits System.Web.UI.Page

    Protected Sub btnConfirm_Click(sender As Object, e As System.EventArgs) Handles btnConfirm.Click
        lblMessage.Text = "Thank you for choosing your flowers for the groom and bride. " & _
             "Bride comments: " & txtBrideComments.Text.Trim & " Groom comments: " & txtGroomComments.Text.Trim
    End Sub

    Protected Sub chkGroom_SelectedIndexChanged(sender As Object, e As System.EventArgs) Handles chkGroom.SelectedIndexChanged
        If chkGroom.Items(0).Selected And chkGroom.Items(1).Selected Then
            imgGroom1.ImageUrl = "images/groom.jpg"
            imgGroom2.ImageUrl = "images/groom1.jpg"
        ElseIf chkGroom.Items(0).Selected And chkGroom.Items(2).Selected Then
            imgGroom1.ImageUrl = "images/groom.jpg"
            imgGroom2.ImageUrl = "images/groom2.jpg"
        ElseIf chkGroom.Items(0).Selected And chkGroom.Items(3).Selected Then
            imgGroom1.ImageUrl = "images/groom.jpg"
            imgGroom2.ImageUrl = "images/groom3.jpg"
        ElseIf chkGroom.Items(1).Selected And chkGroom.Items(2).Selected Then
            imgGroom1.ImageUrl = "images/groom1.jpg"
            imgGroom2.ImageUrl = "images/groom2.jpg"
        ElseIf chkGroom.Items(1).Selected And chkGroom.Items(3).Selected Then
            imgGroom1.ImageUrl = "images/groom1.jpg"
            imgGroom2.ImageUrl = "images/groom3.jpg"
        ElseIf chkGroom.Items(2).Selected And chkGroom.Items(3).Selected Then
            imgGroom1.ImageUrl = "images/groom2.jpg"
            imgGroom2.ImageUrl = "images/groom3.jpg"
        End If
    End Sub

    Protected Sub chkBride_SelectedIndexChanged(sender As Object, e As System.EventArgs) Handles chkBride.SelectedIndexChanged
        If chkBride.Items(0).Selected And chkBride.Items(1).Selected Then
            imgBride1.ImageUrl = "images/bouqet1.jpg"
            imgBride2.ImageUrl = "images/bouquet2.jpg"
        ElseIf chkBride.Items(0).Selected And chkBride.Items(2).Selected Then
            imgBride1.ImageUrl = "images/bouqet1.jpg"
            imgBride2.ImageUrl = "images/bouquet3.jpg"
        ElseIf chkBride.Items(0).Selected And chkBride.Items(3).Selected Then
            imgBride1.ImageUrl = "images/bouqet1.jpg"
            imgBride2.ImageUrl = "images/bouquet4.jpg"
        ElseIf chkBride.Items(1).Selected And chkBride.Items(2).Selected Then
            imgBride1.ImageUrl = "images/bouqet1.jpg"
            imgBride2.ImageUrl = "images/bouquet3.jpg"
        ElseIf chkBride.Items(1).Selected And chkBride.Items(3).Selected Then
            imgBride1.ImageUrl = "images/bouquet2.jpg"
            imgBride2.ImageUrl = "images/bouquet4.jpg"
        ElseIf chkBride.Items(2).Selected And chkBride.Items(3).Selected Then
            imgBride1.ImageUrl = "images/bouquet3.jpg"
            imgBride2.ImageUrl = "images/bouquet4.jpg"
        End If
    End Sub

    Protected Sub ImageButton1_Click(sender As Object, e As System.Web.UI.ImageClickEventArgs) Handles ImageButton1.Click
        ImageButton1.Visible = False
        Calendar1.Visible = True
    End Sub

    Protected Sub Calendar1_SelectionChanged(sender As Object, e As System.EventArgs) Handles Calendar1.SelectionChanged
        txtDelivery.Text = Calendar1.SelectedDate.Month.ToString & "/" & Calendar1.SelectedDate.Day.ToString & "/" & Calendar1.SelectedDate.Year.ToString
        Calendar1.Visible = False
        ImageButton1.Visible = True
    End Sub
End Class
