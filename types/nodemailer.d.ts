declare module 'nodemailer' {
  const nodemailer: any;
  export default nodemailer;
}
EO

mkdir -p types
cat > types/nodemailer.d.ts << 'EOF'
declare module 'nodemailer' {
  const nodemailer: any;
  export default nodemailer;
}
