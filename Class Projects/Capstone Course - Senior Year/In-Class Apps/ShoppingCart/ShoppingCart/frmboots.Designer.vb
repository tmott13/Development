<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class frmboots
    Inherits System.Windows.Forms.Form

    'Form overrides dispose to clean up the component list.
    <System.Diagnostics.DebuggerNonUserCode()> _
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Required by the Windows Form Designer
    Private components As System.ComponentModel.IContainer

    'NOTE: The following procedure is required by the Windows Form Designer
    'It can be modified using the Windows Form Designer.  
    'Do not modify it using the code editor.
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Me.GroupBox1 = New System.Windows.Forms.GroupBox()
        Me.lstBoots = New System.Windows.Forms.ListBox()
        Me.btnCart = New System.Windows.Forms.Button()
        Me.btnClose = New System.Windows.Forms.Button()
        Me.GroupBox1.SuspendLayout()
        Me.SuspendLayout()
        '
        'GroupBox1
        '
        Me.GroupBox1.Controls.Add(Me.btnClose)
        Me.GroupBox1.Controls.Add(Me.btnCart)
        Me.GroupBox1.Controls.Add(Me.lstBoots)
        Me.GroupBox1.Location = New System.Drawing.Point(12, 12)
        Me.GroupBox1.Name = "GroupBox1"
        Me.GroupBox1.Size = New System.Drawing.Size(481, 326)
        Me.GroupBox1.TabIndex = 0
        Me.GroupBox1.TabStop = False
        Me.GroupBox1.Text = "Snow Boots Selection"
        '
        'lstBoots
        '
        Me.lstBoots.FormattingEnabled = True
        Me.lstBoots.Items.AddRange(New Object() {"BlueBoots", "RedBoots", "GreenBoots", "PurpleBoots"})
        Me.lstBoots.Location = New System.Drawing.Point(72, 19)
        Me.lstBoots.Name = "lstBoots"
        Me.lstBoots.Size = New System.Drawing.Size(316, 212)
        Me.lstBoots.TabIndex = 0
        '
        'btnCart
        '
        Me.btnCart.Location = New System.Drawing.Point(72, 256)
        Me.btnCart.Name = "btnCart"
        Me.btnCart.Size = New System.Drawing.Size(75, 23)
        Me.btnCart.TabIndex = 1
        Me.btnCart.Text = "Add to Cart"
        Me.btnCart.UseVisualStyleBackColor = True
        '
        'btnClose
        '
        Me.btnClose.Location = New System.Drawing.Point(313, 256)
        Me.btnClose.Name = "btnClose"
        Me.btnClose.Size = New System.Drawing.Size(75, 23)
        Me.btnClose.TabIndex = 2
        Me.btnClose.Text = "Exit"
        Me.btnClose.UseVisualStyleBackColor = True
        '
        'frmboots
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(506, 356)
        Me.Controls.Add(Me.GroupBox1)
        Me.Name = "frmboots"
        Me.Text = "frmboots"
        Me.GroupBox1.ResumeLayout(False)
        Me.ResumeLayout(False)

    End Sub
    Friend WithEvents GroupBox1 As System.Windows.Forms.GroupBox
    Friend WithEvents btnClose As System.Windows.Forms.Button
    Friend WithEvents btnCart As System.Windows.Forms.Button
    Friend WithEvents lstBoots As System.Windows.Forms.ListBox
End Class
